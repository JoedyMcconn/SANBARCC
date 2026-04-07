import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const getValue = (key: string) => (formData.get(key) || "").toString().trim();

        const fullName = getValue("Full-Name");
        const date = getValue("Date");
        const address = getValue("Address");
        const phone = getValue("Phone");
        const email = getValue("Email-Address");
        const driversLicense = getValue("Drivers-License");
        const driversLicenseClass = getValue("Drivers-License-Class");
        const dateAvailable = getValue("Date-Available");
        const wageDesired = getValue("Wage-Desired");
        const employmentType = getValue("Employment-Type");
        const currentlyEmployed = getValue("Currently-Employed");
        const contactEmployer = getValue("Contact-Employer");
        const marijuanaCard = getValue("Marijuana-Card");

        const positions = formData.getAll("position").map((value) => value.toString());
        const otherPosition = getValue("skills");

        const messageText = `
SAN BAR CONSTRUCTION - NEW JOB APPLICATION

Applicant Information
---------------------
Full Name: ${fullName}
Date: ${date}
Address: ${address}
Phone: ${phone}
Email: ${email}
Driver's License #: ${driversLicense}
Driver's License Class: ${driversLicenseClass}
Date Available: ${dateAvailable}
Wage Desired: ${wageDesired}
Employment Type: ${employmentType}
Currently Employed: ${currentlyEmployed}
May Contact Employer: ${contactEmployer}
Medical Marijuana Card: ${marijuanaCard}

Positions Applying For
----------------------
Positions: ${positions.join(", ")}
Other / Skills: ${otherPosition}
        `.trim();

        console.log(messageText);

        return NextResponse.json({
            message: "Application received successfully.",
            status: 200,
        });

    } catch (error) {
        console.error("Job application error:", error);

        return NextResponse.json({
            message: "There was a problem submitting the application.",
            status: 500,
        });
    }
}