"use client";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./Sidebar"), { ssr: true });
const Header = dynamic(() => import("./Header"), { ssr: true });
const Footer = dynamic(() => import("./Footer"), { ssr: true });

export default function PageScaffold({ title, breadcrumb = [], children }) {
    return (
        <div className="page-container">
            <div className="page-sidebar">
                <Sidebar />
            </div>
            <div className="page-content">
                <div className="page-header">
                    <Header />
                </div>
                <div className="page-inner">
                    <div id="main-wrapper">
                        <div className="pageheader pd-t-25 pd-b-35">
                            <div className="pd-t-5 pd-b-5">
                                <h1 className="pd-0 mg-0 tx-20">{title}</h1>
                            </div>
                            <div className="breadcrumb pd-0 mg-0">
                                <a className="breadcrumb-item" href="/"><i className="icon ion-ios-home-outline"></i> Home</a>
                                {breadcrumb.map((b, idx) => (
                                    <span key={idx} className={`breadcrumb-item ${idx === breadcrumb.length - 1 ? "active" : ""}`}>{b}</span>
                                ))}
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}



