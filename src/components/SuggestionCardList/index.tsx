import React from "react";
import { User, AlarmClock, MessagesSquare } from "lucide-react";

export interface Suggestion {
  _id: string;
  title: string;
  content: string;
  userName: string;
  categoryName: string;
  dataFormated: string;
}

export interface SuggestionProps {
  suggestions: Suggestion[];
}

export default function SuggestionCardList({ suggestions }: SuggestionProps) {
  return (
    <>
      {suggestions?.map((suggestion) => (
        <div
          key={suggestion._id}
          className="bg-white text-black px-6 py-4 rounded overflow-hidden shadow-lg mb-4"
        >
          <div className="font-bold text-xl mb-2">{suggestion.title}</div>
          <div className="text-gray-700 text-base font-serif text-justify">
            {suggestion.content}
            <hr className="mt-4 mb-4" />
            <div className="inline-table font-mono font-bold md:flex flex-row">
              <div className="flex col mr-4 md:mr-6">
                <User className="text-black mr-2" size="20" />
                {suggestion.userName}
              </div>
              <div className="flex col mr-4">
                <MessagesSquare className="text-black mr-2" size="20" />
                {suggestion.categoryName}
              </div>
              <div className="flex col">
                <AlarmClock className="text-black mr-2" size="20" />
                {suggestion.dataFormated}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
