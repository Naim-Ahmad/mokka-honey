import React from "react";

export default function Section({classSec, container, children}){
    return (
        <section className={`sec-p ${classSec}`}>
            <div className={`container ${container}`}>
                {children}
            </div>
        </section>
    )
}