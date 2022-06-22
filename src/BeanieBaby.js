import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanie }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    <Link className='beanie-baby' to={`/BeanieDetail/${beanie.id}`}>
      {/* // it should also render the beanie baby's image and show the beanie baby's name */}
      <h3>{beanie.title}</h3>
      <img className='beanie-img' src={`${beanie.image}`} />
    </Link>
  );
}
