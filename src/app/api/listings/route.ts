/* eslint-disable import/prefer-default-export */
import prisma from "@/lib/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  let jobListings = null;
  try {
    jobListings = await prisma.jobListing.findMany();
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching job listings",
      status: 500,
    });
  }
  return NextResponse.json(jobListings);
}
