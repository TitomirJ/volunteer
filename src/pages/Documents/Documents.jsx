import React from "react";
import Footer from "../../components/Footer";
import InfoNav from "../../components/InfoNav";
import { FormattedMessage } from "react-intl";
import { Viewer } from "@react-pdf-viewer/core";

import { Grid } from "@mui/material";

import pdf1 from "./../../Docs/1.pdf";
import pdf2 from "./../../Docs/2.pdf";
import pdf3 from "./../../Docs/3.pdf";
import pdf4 from "./../../Docs/4.pdf";

import styles from "./Documents.module.scss";

function Documents() {
	const pdfArray = [pdf1, pdf2, pdf3, pdf4];

	return (
		<div>
			<InfoNav />
			<Grid
				marginTop={30}
				marginBottom={10}
				alignItems='center'
				justifyContent='center'
				container>
				<h1>
					<FormattedMessage id='docs' />
				</h1>
				<Grid
					container
					alignItems='center'
					justifyContent='center'
					marginTop={5}>
					{pdfArray.map((pdf) => (
						<div className={styles.preview}>
							<a target='_blank' href={pdf} rel='noreferrer'>
								<Viewer fileUrl={pdf} />
							</a>
						</div>
					))}
				</Grid>
			</Grid>

			<Footer />
		</div>
	);
}

export default Documents;
