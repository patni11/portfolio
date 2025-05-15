"use client";
import React, { useState } from "react";
import { articles, tags, archived } from "../constants/articles";

export default function Writings() {
  const [articlesData, setArticles] = useState(articles);
  const [filter, setFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [showArchived, setShowArchived] = useState(false);

  const sourceArticles = showArchived ? archived : articles;


  const years = [
    "All",
    ...Array.from(
      { length: new Date().getFullYear() - 2019 },
      (_, i) => (2020 + i).toString()
    ),
  ];

  const applyFilters = (topic, year, source) => {
    let filtered = [...source].sort(
      (a, b) => new Date(b.fields.date_created) - new Date(a.fields.date_created)
    );

    if (topic !== "All") {
      filtered = filtered.filter((article) =>
        article.fields.tags.includes(topic)
      );
    }

    if (year !== "All") {
      filtered = filtered.filter((article) => {
        const articleYear = new Date(article.fields.date_created).getFullYear().toString();
        return articleYear === year;
      });
    }

    return filtered;
  };

  const handleFilter = (type, value) => {
    const updatedTopic = type === "topic" ? value : filter;
    const updatedYear = type === "year" ? value : yearFilter;
    const filtered = applyFilters(updatedTopic, updatedYear, sourceArticles);

    setFilter(updatedTopic);
    setYearFilter(updatedYear);
    setArticles(filtered);
  };

  const toggleArchived = () => {
    const next = !showArchived;
    const newSource = next ? archived : articles;
    const filtered = applyFilters(filter, yearFilter, newSource);

    setShowArchived(next);
    setArticles(filtered);
  };

  return (
    <section className="bg-white dark:bg-gray-900 h-full py-8 font-['Inter_var']">
      <div className="w-full md:w-[80%] mx-auto items-center justify-center flex">
        <div className="flex flex-col md:flex-row gap-8 w-[90%] md:w-3/4 items-start justify-center">
          {/* Filters Column */}
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              {/* Topic Filter */}
              <div>
                <h3 className="text-sm md:text-xl mb-2 font-bold">Topic</h3>
                <ul className="md:space-y-2 flex flex-row md:flex-col space-x-2 md:space-x-0 flex-wrap">
                  {tags.map((tag, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleFilter("topic", tag)}
                        className={`w-content text-sm md:text-md text-left transition-colors
                          ${filter === tag
                            ? "text-red-500"
                            : "dark:text-white text-black"}`}
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Year Filter */}
              <div>
              <h3 className="text-sm md:text-xl mb-2 font-bold">Year</h3>
                <ul className="md:space-y-2 flex flex-row md:flex-col space-x-2 md:space-x-0 flex-wrap">
                  {years.map((year, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleFilter("year", year)}
                        className={`w-content text-sm text-left md:text-md transition-colors
                          ${yearFilter === year
                            ? "text-red-500"
                            : "dark:text-white text-black"}`}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Articles Column */}
          <div className="w-full md:w-2/3">
            <div className="space-y-2">
              {articlesData.length === 0 ? (
                <p className="text-sm text-gray-500">No articles</p>
              ) : (
                articlesData.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.fields.medium_link}
                    className="block hover:underline visited:text-gray-400"
                  >
                    <h2 className="text-sm mb-4 font-['EB_Garamond'] text-xl">{article.fields.title}</h2>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs w-full justify-center items-center flex mt-[100px]">
        <span className="mr-2">
          {showArchived ? "Back to good articles -" : "My shittier blogs -"}
        </span>
        <button onClick={toggleArchived} className="text-red-500 underline">
          {showArchived ? "Not Archived" : "Archived"}
        </button>
      </div>
    </section>
  );
}
