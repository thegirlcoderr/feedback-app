import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> About this project</h1>
        <p>
          This is a cutting-edge feedback app built with React dedicated to
          amplifying your voice, allowing you to effortlessly share your
          thoughts and make a significant impact.
        </p>
        <p>Version:1.1.0</p>

        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
