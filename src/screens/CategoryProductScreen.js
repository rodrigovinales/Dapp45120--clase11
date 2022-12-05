import { FlatList } from "react-native";
import React from "react";
import ProductItem from "../components/ProductItem";
import { PRODUCTS } from "../data/products";

const CategoryProductScreen = ({ navigation, route }) => {
  const products = PRODUCTS.filter(
    (product) => product.category === route.params.categoryID
  );

  const handleSelectedCategory = (item) => {
    navigation.navigate("Details", {
      productID: item.id,
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
    />
  );
};

export default CategoryProductScreen;
