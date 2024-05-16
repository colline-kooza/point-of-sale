"use server"


import db from '@/prisma/db';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function createContactUs(
  fullName: string,
  email: string,
  phone: string | null,
  message: string
) {
  try {
    const newContactUs = await prisma.contactUs.create({
      data: {
        fullName,
        email,
        phone,
        message,
      },
    });
    revalidatePath("/dashboard/manage-dishes"); 

    // console.log('ContactUs created:', newContactUs);
    return newContactUs;
  } catch (error) {
    console.error('Error creating ContactUs:', error);
  } 
}
export async function getContactUs() {
  try {
    const contactUsEntries = await prisma.contactUs.findMany();
    return contactUsEntries;
  } catch (error) {
    console.error('Error fetching ContactUs entries:', error);
    throw error;
  }
}

export async function updateUserById(id: string) {
  if (id) {
    try {
      const updatedUser = await db.user.update({
        where: {
          id,
        },
        data: {
          emailVerified: true,
        },
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  }
}