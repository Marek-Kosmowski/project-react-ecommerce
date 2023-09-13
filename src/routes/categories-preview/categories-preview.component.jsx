import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const getCategoriesMap = useSelector(selectCategoriesMap);
  return (
    // <> => shortand for fragment
    <Fragment>
      {Object.keys(getCategoriesMap).map((title) => {
        const products = getCategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
