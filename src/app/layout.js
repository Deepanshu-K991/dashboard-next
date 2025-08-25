import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata = {
    title: "Sales Monitoring | Metrical",
    description: "Next.js port of the Sales Monitoring dashboard",
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/images/favicon.ico" />
                <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/plugins/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/assets/plugins/flag-icon/flag-icon.min.css" />
                <link rel="stylesheet" href="/assets/plugins/simple-line-icons/css/simple-line-icons.css" />
                <link rel="stylesheet" href="/assets/plugins/ionicons/css/ionicons.css" />
                <link rel="stylesheet" href="/assets/plugins/toastr/toastr.min.css" />
                <link rel="stylesheet" href="/assets/plugins/chartist/chartist.css" />
                <link rel="stylesheet" href="/assets/plugins/apex-chart/apexcharts.css" />
                <link rel="stylesheet" href="/assets/css/app.min.css" />
                <link rel="stylesheet" href="/assets/css/style.min.css" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}

                {/* jQuery removed */}
                {/* Popper/Bootstrap JS removed to eliminate jQuery dependency */}
                {/* Removed global scripts. Libraries will be imported where used and DOM work moved into hooks. */}
            </body>
        </html>
    );
}


