import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../pages/contact.css';

const About = () => (
  <Layout>
    <Seo title="Sobre" />
    <div>
      <h1>Sobre o autor</h1>
      <p>Rafael Rangel é formado em Física pela UNIFEI e pós-graduado em Ciência de Dados e Big Data pela PUC Minas. Atualmente, está cursando mestrado em Astrofísica com foco em Ciência de Dados. Como cientista de dados na ZENVIA, tem a oportunidade de explorar técnicas avançadas de Aprendizado de Máquina, Deep Learning, entre outras áreas relacionadas à Ciência de Dados. Seu trabalho envolve o uso extensivo de Python, com bibliotecas como NumPy, Pandas, Scikit-learn, TensorFlow e Keras.</p>

      <p>Sua experiência inclui o uso de ferramentas de Aprendizado de Máquina em ambientes de nuvem, como Databricks, Google Vertex AI e Amazon SageMaker, e ele é habilidoso em versionamento de código com Git e gerenciamento de projetos de Aprendizado de Máquina com MLflow. Seus principais interesses são Aprendizado de Máquina, Deep Learning, Ciência de Dados, Astrofísica e Python.</p>
    </div>

    <Link to="/">Voltar para a página inicial</Link>
  </Layout>
)

export default About
