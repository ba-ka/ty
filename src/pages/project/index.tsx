import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import Image from "next/image";
import React, { useEffect } from "react";

function Project() {
    useEffect(() => {
        setTimeout(() => window.location.href = "https://hako.work/work", 3000)
    }, []);

    return (
        <Layout title="blog">
            <div className="page blog">
                <div className="banner">
                    <Image
                        src="/image/project.gif"
                        alt="blog"
                        fill
                        sizes="100%, 100%, 100%"
                        priority
                    />
                </div>
                <Menu/>
                <div>
                    <p>you are redirecting to <a href="https://hako.work/work">https://hako.work/work</a> :&#41;</p>
                </div>
                <Footer/>
            </div>
        </Layout>
    );
}

export default Project;