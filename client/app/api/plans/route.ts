import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
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

    const tripPlans = await prisma.tripPlan.findMany({
      where: {
        userId: session.user.id
      },
      distinct: ['id'],
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(
      {
        success: true,
        tripPlans
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching trip plans:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch trip plans'
      },
      { status: 500 }
    );
  }
}