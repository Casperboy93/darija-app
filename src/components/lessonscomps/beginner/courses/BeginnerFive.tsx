"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/five/LessonOverview';
import TraditionalDishes from '../coursecomps/five/TraditionalDishes';
import BeveragesDrinks from '../coursecomps/five/BeveragesDrinks';
import RestaurantPhrases from '../coursecomps/five/RestaurantPhrases';
import MarketShopping from '../coursecomps/five/MarketShopping';
import CommonIngredients from '../coursecomps/five/CommonIngredients';
import DiningConversations from '../coursecomps/five/DiningConversations';
import CulturalTips from '../coursecomps/five/CulturalTips';

export default function BeginnerFive() {
  return (
    <LessonLayout 
      title="Food and Dining" 
      level="beginner" 
      lessonNumber={5}
      nextLesson="intermediate-one"
    >
      <LessonOverview />
      <TraditionalDishes />
      <BeveragesDrinks />
      <RestaurantPhrases />
      <MarketShopping />
      <CommonIngredients />
      <DiningConversations />
      <CulturalTips />
    </LessonLayout>
  );
}