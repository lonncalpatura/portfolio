import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"

const categories = [
  {
    name: "ALL",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
      },
    ],
  },
  {
    name: "ABOUT",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
      },
    ],
  },
  {
    name: "PROJECTS",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
      },
    ],
  },
  {
    name: "EXPERIENCE",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
      },
    ],
  },
  {
    name: "EDUCATION",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
      },
    ],
  },
]

export default function Example() {
  return (
    <div className="flex w-full justify-center pt-24 px-4">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-2">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-lg bg-white/5 p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
