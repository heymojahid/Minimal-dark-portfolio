import Figma from "@/components/icons/tech/Figma";
import PostgreSQL from "@/components/icons/tech/PostgreSQL";
import { Supabase } from "@/components/icons/tech/Supabase";
import Flutter from "@/components/icons/tech/Flutter";
import Dart from "@/components/icons/tech/Dart";
import GooglePlayConsole from "@/components/icons/tech/GooglePlayConsole";

import type { Experience } from "./types";

const ExperienceCardData: Experience[] = [
  {
    id: "dynamqr",
    companyName: "DynamQR",
    companyLogo: "/company.webp",
    companyWebsite: "https://dynamqr.app/",
    isCurrentEmployer: true,
    positions: [
      {
        id: "founder-fullstack",
        title: "Founder & Full-Stack Developer",
        employmentType: "Independent / Self-Employed",
        employmentPeriod: {
          start: "2026",
        },
        duration: "Ongoing",
        description: `Built and launched DynamQR, a QR code management application designed to let users create and manage dynamic QR codes.
Developed the application using Flutter, delivering a cross-platform mobile experience.
Designed and implemented the backend and database using Supabase.
Published and managed the application on the Google Play Store.
Worked across product development, UI/UX, backend integration, database management, testing, and deployment.
Continuously develop and ship new features based on user needs and feedback.`,
        skills: [
          {
            name: "Flutter",
            href: "https://flutter.dev/",
            icon: <Flutter />,
          },
          {
            name: "Dart",
            href: "https://dart.dev/",
            icon: <Dart />,
          },
          {
            name: "Supabase",
            href: "https://supabase.com/",
            icon: <Supabase />,
          },
          {
            name: "PostgreSQL",
            href: "https://www.postgresql.org/",
            icon: <PostgreSQL />,
          },
          {
            name: "Figma",
            href: "https://figma.com/",
            icon: <Figma />,
          },
          {
            name: "Google Play Console",
            href: "https://play.google.com/console",
            icon: <GooglePlayConsole />,
          },
        ],
        isExpanded: true,
      },
    ],
  },
];

export default ExperienceCardData;
