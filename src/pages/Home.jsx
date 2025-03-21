import Hero from '../components/Hero'
import Features from '../components/Features'
import DeveloperCTA from '../components/DeveloperCTA'
import EarlyAdopters from '../components/EarlyAdopters'
import KeyPillars from '../components/TabContent'

export default function Home() {
  return (
    <>
      <Hero />
      <KeyPillars />
      <Features />
      {/* <DeveloperCTA /> */}
      {/* <EarlyAdopters /> */}
    </>
  )
}