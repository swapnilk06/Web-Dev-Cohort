import {PrismaClient} from "../generated/prisma/index.js";

// prisma best practices 

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient();

//  For optimize appln more & more
if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

