import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <Card title="Welcome">
        <p>This is the homepage. Use this space to test components.</p>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </Card>
    </div>
  );
};

export default Home;
