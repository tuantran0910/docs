import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  return (
    <Layout title="Home" description="Welcome to Tran Ngoc Tuan's personal website">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          textAlign: 'center',
          flexDirection: 'column',
          fontSize: '1.2rem',
        }}
      >
        <div
          style={{
            marginTop: '100px',
          }}
        >
          <p>Hi, my name is</p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold' }}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Tran Ngoc Tuan')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>

          <>I am a <span style={{ color: 'orange', fontWeight: 'bold' }}>Data Engineer</span> passionate about building data pipelines and data analytics solutions.</>

          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Link href="https://www.linkedin.com/in/tntuan0910/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '33px' }}>
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/tuantran0910" target="_blank" rel="noopener noreferrer" style={{ fontSize: '33px' }}>
              <FaGithub />
            </Link>
            <Link href="https://t.me/tntuan0910" target="_blank" rel="noopener noreferrer" style={{ fontSize: '33px' }}>
              <FaPaperPlane />
            </Link>
          </div> */}

          

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30px',
              gap: '20px',
            }}
          >
            <Link to="/docs/category/my-projects">
              <button
                style={{
                  backgroundColor: '#686D76',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                Project
              </button>
            </Link>

            <Link to="/docs/category/some-interesting-guides">
              <button
                style={{
                  backgroundColor: '#686D76',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                Guide
              </button>
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '100px',
              gap: '20px',
            }}
          >
            <img src="/img/home/python.png" alt="python" width={45} height={45} />
            <img src="/img/home/postgresql.svg" alt="postgreSQL" width={45} height={45} />
            <img src="/img/home/clickhouse.svg" alt="clickhouse" width={50} height={50} />
            <img src="/img/home/dagster.svg" alt="dagster" width={45} height={45} />
            <img src="/img/home/airflow.svg" alt="airflow" width={45} height={45} />
            <img src="/img/home/dbt.svg" alt="dbt" width={45} height={45} />
            <img src="/img/home/kafka.svg" alt="kafka" width={45} height={45} />
            <img src="/img/home/superset.png" alt="superset" width={50} height={35} />
            <img src="/img/home/docker.svg" alt="docker" width={60} height={55} />
            <img src="/img/home/k8s.svg" alt="kubernetes" width={45} height={45} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
