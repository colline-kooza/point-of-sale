"use server"

import db from "@/prisma/db";
import { PrismaClient } from "@prisma/client";


export type ProfileFormData = {
  userId:string;
  username: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: Date;
  bio: string;
  image: string;
};


export async function updateOrCreateProfile(formData: any) {
    // console.log(formData)
    try {

        if (!formData.userId) {
        console.log('User ID is required.');
          }
      const existingProfile = await   db.profile.findUnique({
        where: { id: formData.userId },
      });
  
      if (existingProfile) {
        const updatedProfile = await  db.profile.update({
          where: { id: formData.userId },
          data: {
            username: formData.username,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            dateOfBirth: formData.dateOfBirth,
            bio: formData.bio,
            image: formData.image,
            userId:formData.userId
          },
        });
        console.log(updatedProfile);
        return updatedProfile;
      } else {
        const newProfile = await  db.profile.create({
          data: {
            id: formData.userId,
            username: formData.username,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            dateOfBirth: formData.dateOfBirth,
            bio: formData.bio, 
            image: formData.image,
            userId:formData.userId

          },
        });
        console.log(newProfile);
        return newProfile;
      }
    } catch (error) {
      console.log(error);
    } 
  }


  export async function getProfileByUserId(userId: string) {
    try {
      const profile = await db.profile.findUnique({
        where: { id: userId },
      });
  
      if (profile) {
        console.log(profile);
        return profile;
      } 
    } catch (error) {
      console.log(error);
    }
  }
  