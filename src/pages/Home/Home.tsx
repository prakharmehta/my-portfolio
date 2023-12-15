import ContributionGraph from '../../components/ContributionGraph/ContributionGraph'

function Home() {
  return (
    <>
      <div className='page'>
        <div className="page__title text-mono text-small">prakharmehta <span>/</span> HOME<span>.md</span></div>
        <div className="page__body">
        I am a highly motivated developer with 2 years of experience in full stack web development including part time and full time opportunities. Till now, I have used several tools and frameworks including React, Angular, JavaScript, Typescript, SQL, NoSQL, Java, etc. I have a solid understanding of software development methodologies and have worked collaboratively with cross-functional teams to deliver high-quality products on time and within budget. I am passionate about building robust, scalable, and user-friendly software solutions, and I am always looking for opportunities to learn and grow my skills further.
        </div>
        <ContributionGraph></ContributionGraph>
      </div>
      
    </>

  )
}

export default Home