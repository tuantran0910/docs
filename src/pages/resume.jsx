import React from "react";
import Layout from "@theme/Layout";
import styles from "./resume.module.css"; // Custom CSS for this page
import {
  faDownload,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  return (
    <Layout
      title="Resume"
      description="A summary of my professional background"
    >
      <div className={styles.resumeContainer}>
        <h1>Resume</h1>

        {/* CV Download Section */}
        <div className={styles.cvDownload}>
          <a
            target="_blank"
            href={require("/cv/TranNgocTuan_CV.pdf").default}
            className={styles.downloadButton}
            download={"TranNgocTuan_CV.pdf"}
          >
            <FontAwesomeIcon icon={faDownload} /> Get My CV (PDF)
          </a>
        </div>

        {/* Work Experience Section */}
        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faBriefcase} /> Working Experiences
          </h2>

          {/* <div className={styles.experienceItem}>
            <h3>Analytics Engineer Intern - Cake</h3>
            <p>
              <strong>Location:</strong> Ho Chi Minh City |{" "}
              <strong>Duration:</strong> October 2024 - Present
            </p>
            <ul>
              <li>Upcoming ...</li>
            </ul>
          </div> */}

          <div className={styles.experienceItem}>
            <h3>Data Engineer Intern - Tiki</h3>
            <p>
              <strong>Location:</strong> Ho Chi Minh City |{" "}
              <strong>Duration:</strong> June 2024 - October 2024
            </p>
            <ul>
              <li>
                Design basic ETL pipeline that ingested transactional data,
                process and load them to data warehouse for analytical purpose.
              </li>
              <li>
                Integrate Lambda Architecture, combine batch and stream
                processing for data processing.
              </li>
              <li>
                Project:{" "}
                <a href="/docs/projects/rainbow/">Rainbow Mini Data Platform</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h2>

          <div className={styles.educationItem}>
            <h3>
              University of Science - Vietnam National University, Ho Chi Minh
              City
            </h3>
            <p>
              <strong>Bachelor:</strong> Data Science |{" "}
              <strong>Graduation:</strong> Expected July. 2025
            </p>
            <ul>
              <li>Cummulative GPA: 8.94/10.00.</li>
              <li>
                Relevant Coursework: Algorithms; Statistics; Artificial
                Intelligence; Database Management.
              </li>
              <li>
                Received scholarships for being in the top 5% of the class for
                three out of four semesters.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
