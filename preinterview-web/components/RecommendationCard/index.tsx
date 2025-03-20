"use client";

import { Flex, Image, Typography } from "antd";
import React, { useEffect } from "react";
import "./style.css"; // 引入樣式檔案
const { Title, Text } = Typography;

interface CardProps {
  imageUrl: string;
  title: string;
  category: string;
}

const RecommendationCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  category,
}) => {
  useEffect(() => {
    console.log(Typography);
    console.log(Text);
  }, []);

  return (
    <Flex vertical style={{ maxWidth: "120px" }}>
      <Image
        src={imageUrl}
        alt="Recommendation Image"
        preview={false}
        width={120}
        height={120}
        style={{ borderRadius: "15px" }}
      />
      <Text
        className="title-truncate"
        style={{ maxWidth: "100%", fontSize: "1.1rem", fontWeight: "bold" }}
      >
        {title}
      </Text>
      <Text
        className="category-truncate"
        type="secondary"
        style={{ maxWidth: "100%", fontSize: "0.8rem" }}
      >
        {category}
      </Text>
    </Flex>
  );
};

export default RecommendationCard;
