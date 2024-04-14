"use server"
import db from "@/prisma/db";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { hash } from "bcrypt";
import { Resend } from 'resend';
import SlackConfirmEmail from "../components/reactEmail";
import { UserProps } from "@/types/types";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function saveData(data: UserProps) {
    try {
        const { name, email, password } = data;

        const hashedPassword = await hash(password, 10);

        const existingUser = await db.user.findFirst({
            where: { email },
        });

        if (existingUser) {
            throw new Error("User with this email already exists");
        }
        const randomToken = Math.floor(1000 + Math.random() * 9000);
        // Convert the number to a string
        const token = randomToken.toString();
        // console.log(token)


        const rawToken = uuidv4();
        const tokenUrl = base64url.encode(rawToken);
        const verify= await resend.emails.send({
            from: 'Verification Code <info@flakolimited.com>',
            to: [email],
            subject: 'Verification',
            react:SlackConfirmEmail ({token}),
          });

    //    console.log(verify)
    const newUser = await db.user.create({
        data: {
            name,
            email,
            password:hashedPassword,
            token:token,
            verifiactionToken :tokenUrl 
        },
    });
    console.log(newUser)
 
        return newUser; 
    } catch (error) {
        console.error("Error saving data:", error);
        throw new Error("Failed to save data");
    }
}

export async function getUsers(){
    try {
        const users =await db.user.findMany()
        return users
    } catch (error) {
        console.log(error)
    }
}


























// export async function getProjects(){
//     try {
//       const projects = await prisma.project.findMany()  
//       return projects
//     } catch (error) {
//        console.log(error) 
//     }
// }