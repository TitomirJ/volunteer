import React from "react";
import Footer from "../../components/Footer";
import InfoNav from "../../components/InfoNav";
import { FormattedMessage } from "react-intl";
import { Viewer } from "@react-pdf-viewer/core";

import pdf1 from "./../../Docs/1.pdf";
import pdf2 from "./../../Docs/2.pdf";
import pdf3 from "./../../Docs/3.pdf";

import styles from "./Documents.module.scss";

function Documents() {
  const pdfArray = [pdf1, pdf2, pdf3];

  return (
    <div>
      <InfoNav />
      <div className={styles.content}>
        <h1>
          <FormattedMessage id='docs' />
        </h1>
        <div className={styles.list}>
          {pdfArray.map((pdf) => (
            <div className={styles.preview}>
              <a target='_blank' href={pdf} rel='noreferrer'>
                <Viewer fileUrl={pdf} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Documents;
