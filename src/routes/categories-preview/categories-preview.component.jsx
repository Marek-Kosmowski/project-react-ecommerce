import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const getCategoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    // <> => shortand for fragment
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(getCategoriesMap).map((title) => {
          const products = getCategoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
