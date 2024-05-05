import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import ImageComp from "@/src/components/create/SelectedImage";
import { useLocalImages } from "@/src/state/store/localimagestore";

const AllImages = () => {
  const {
    allimages,
    endCursor,
    hasNext,
    loading,
    setallimages,
    setendCursor,
    sethasNext,
    setloading,
  } = useLocalImages();

  const fetchImages = useCallback(async () => {
    try {
      if (loading && !hasNext) {
        console.log(hasNext);
        console.log(loading);
        return;
      }
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted" && canAskAgain) {
        const { status, canAskAgain } =
          await MediaLibrary.requestPermissionsAsync();
        if (!(status === "granted") && canAskAgain) {
          return;
        }
      }
      if (status === "granted") {
        setloading(true);
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: "photo",
          sortBy: "creationTime",
          first: 30,
          after: endCursor,
        });
        if (endCursor === media?.endCursor) return;
        console.log(media?.endCursor, endCursor);
        setendCursor(media?.endCursor ?? null);
        sethasNext(media?.hasNextPage ?? false);
        setallimages(media?.assets ?? []);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  useEffect(() => {
    console.log("I am calling ");
    if (loading) return;
    fetchImages();
  }, []);
  return (
    <FlatList
      data={allimages ?? []}
      keyExtractor={(item) =>
        item.uri.toString() + `${Math.random()}${Math.random()}`
      }
      contentContainerStyle={{ marginHorizontal: 5, paddingBottom: 40 }}
      numColumns={3}
      columnWrapperStyle={{ gap: 10 }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      onEndReached={() => {
        console.log("Calling");
        if (loading) return;
        fetchImages();
      }}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => {
        return (
          <View>
            {loading && <ActivityIndicator size={44} />}
            <View style={{ height: 100 }} />
          </View>
        );
      }}
      removeClippedSubviews={true}
      initialNumToRender={30}
      maxToRenderPerBatch={30}
      updateCellsBatchingPeriod={50}
      renderItem={({ item, index }) => {
        return (
          <ImageComp
            key={item.uri.toString() + `${Math.random()}${Math.random()}`}
            item={item}
            index={index}
          />
        );
      }}
    />
  );
};

export default AllImages;
