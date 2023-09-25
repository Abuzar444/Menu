import { useState } from "react";

const MenuItem = ({ img, title, price, desc }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{readMore ? desc : `${desc.substring(0, 100)}...`}
          <button className='btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
    </article>
  );
};
export default MenuItem;
