"use client";

import { Flex, Image, Typography, Rate } from "antd";
import React, { useEffect } from "react";
import "./style.css"; // 引入樣式檔案
const { Text } = Typography;

interface CardProps {
  id: string;
  imageUrl: string;
  name: string;
  contentType: string;
  rating: number;
  ratingCount: number;
}

const ApplicationCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  name,
  contentType,
  rating = 0,
  ratingCount = 0,
}) => {
  useEffect(() => {
    console.log(Typography);
    console.log(Text);
  }, []);

  return (
    <Flex gap={"4px"}>
      <Flex
        align="center"
        justify="center"
        style={{ fontSize: "2rem", color: "#9c9c9c", margin: "0 12px" }}
      >
        {id}
      </Flex>
      <Flex>
        <Image
          src={imageUrl}
          alt="Application Image"
          preview={false}
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />
      </Flex>
      <Flex
        vertical
        justify="space-between"
        style={{ boxSizing: "border-box", padding: "4px 0", marginLeft: "8px" }}
      >
        <Flex>
          <Text
            className="application-truncate"
            style={{ maxWidth: "100%", fontSize: "1.2rem", fontWeight: "bold" }}
          >
            {name}
          </Text>
        </Flex>
        <Flex>
          <Text
            className="application-truncate"
            type="secondary"
            style={{ maxWidth: "100%", fontSize: "1rem" }}
          >
            {contentType}
          </Text>
        </Flex>
        <Flex align="center">
          <Rate disabled defaultValue={rating} />
          <Text
            className="application-truncate"
            type="secondary"
            style={{ maxWidth: "100%", fontSize: "0.8rem", marginLeft: "4px" }}
          >
            ({ratingCount})
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ApplicationCard;
