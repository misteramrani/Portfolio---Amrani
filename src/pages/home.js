import React, {useState, useEffect } from 'react';
import './home.scss';
import Footer from '../components/footer';
import Desktop from '../components/desktop';
import Loading from './loading';


function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])


  return (
    <>

{loading === false ? (
  <div className="home">
    <Desktop />
    <Footer />
    </div>

) : (
        <Loading />
      )}
      </>
  );
}

export default Home;
