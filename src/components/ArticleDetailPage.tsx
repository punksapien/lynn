import React from 'react';
import ConnectRatesArticle from './articles/ConnectRates';
import MultilingualUpliftArticle from './articles/MultilingualUplift';
import SDRMathArticle from './articles/SDRMath';

const ARTICLES: Record<string, React.FC> = {
  'cold-calling-connect-rates-by-market':        ConnectRatesArticle,
  'multilingual-calling-doubles-connect-rates':  MultilingualUpliftArticle,
  'in-house-sdr-math-supply-chain':              SDRMathArticle,
};

export const ArticleDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const Article = ARTICLES[slug] ?? ConnectRatesArticle;
  return <Article />;
};

export default ArticleDetailPage;
