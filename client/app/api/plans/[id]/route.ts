import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    
    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: 'Authentication required'
        },
        { status: 401 }
      );
    }

    const { id } = await params;

    const tripPlan = await prisma.tripPlan.findUnique({
      where: { 
        id,
        userId: session.user.id
      },
      include: {
        status: true,
        output: true,
      },
    });

    if (!tripPlan) {
      return NextResponse.json(
        {
          success: false,
          message: 'Trip plan not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        tripPlan
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching trip plan:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch trip plan'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    
    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: 'Authentication required'
        },
        { status: 401 }
      );
    }

    const { id } = params;

    // First check if the plan exists and belongs to the user
    const tripPlan = await prisma.tripPlan.findUnique({
      where: { 
        id,
        userId: session.user.id
      },
    });

    if (!tripPlan) {
      return NextResponse.json(
        {
          success: false,
          message: 'Trip plan not found'
        },
        { status: 404 }
      );
    }

    // Delete related records first (status and output)
    await prisma.tripPlanStatus.deleteMany({
      where: { tripPlanId: id },
    });

    await prisma.tripPlanOutput.deleteMany({
      where: { tripPlanId: id },
    });

    // Delete the trip plan
    await prisma.tripPlan.delete({
      where: { 
        id,
        userId: session.user.id
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Trip plan deleted successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting trip plan:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete trip plan'
      },
      { status: 500 }
    );
  }
}