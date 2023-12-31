import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
        {/* <span className='title'>{title.toUpperCase()}</span> */}
      </h2>
      <Preview>
        {products
          .filter((_, id) => id < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
