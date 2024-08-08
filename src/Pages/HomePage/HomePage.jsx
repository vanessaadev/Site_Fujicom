import React from "react";
import { Apresentation } from "../../Components/Apresentation/Apresentation";
import { Partners } from "../../Components/Partners/Partners";
import { Layout } from "../../Components/Layout/Layout";

export function HomePage() {
    return(
        <Layout>
            <Apresentation/>
            <Partners/>
        </Layout>
    )
}