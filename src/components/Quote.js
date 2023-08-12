import { useEffect, useState } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const Reload = () => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          headers: { 'X-Api-Key': 'oAvV8PHfcyB0hLueVYy7wQ==4Ob3080f6FPplvbt' },
          contentType: 'application/json',
        });
        const json = await response.json();
        setData(json[0].quote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  };

  useEffect(() => {
    Reload();
  }, []);

  if (hasError) return <div className="msg">Something went wrong!</div>;

  if (isLoading) return <div className="msg">Loading...</div>;

  return (
    <div className="quote-container">
      <p className="quote-content">
        {data}
      </p>
      <button className="refresh-btn" onClick={Reload} type="button">
        Refresh
      </button>

    </div>
  );
};

export default Quote;
