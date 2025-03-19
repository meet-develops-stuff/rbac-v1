import React, { useState } from "react";
import MemberModal from "../../components/modals/MemberModal";

const MemberCard = ({ member }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            alt={member.name}
            src={member.image}
            className="size-16 rounded-full object-cover"
          />

          <div className="flex-1">
            <h3
              onClick={() => setIsModalOpen(true)}
              className="text-lg font-medium text-gray-700 cursor-pointer hover:text-blue-500"
            >
              {member.name}
            </h3>

            <div className="flow-root">
              <ul className="flex flex-wrap">
                <li className="p-1 leading-none">
                  <a href={member.socials.twitter} className="text-xs font-medium text-gray-700 hover:text-blue-500"> Twitter </a>
                </li>
                <li className="p-1 leading-none">
                  <a href={member.socials.github} className="text-xs font-medium text-gray-700 hover:text-blue-500"> GitHub </a>
                </li>
                <li className="p-1 leading-none">
                  <a href={member.socials.website} className="text-xs font-medium text-gray-700 hover:text-blue-500"> Website </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          {member.projects && member.projects.length > 0 ? (
            <div className="w-full border-collapse">
              <h4 className="bg-gray-200 text-gray-700 border border-gray-300 px-4 py-2 rounded-t-lg">Featured Project</h4>
              <div className="border border-gray-300 rounded-b-lg p-4 hover:bg-gray-100">
                <strong className="font-medium text-gray-700">{member.projects[0].title}</strong>
                <p className="mt-1 text-xs font-medium text-gray-700">{member.projects[0].description}</p>
              </div>
            </div>
          ) : (
            <div className="w-full border-collapse">
              <h4 className="bg-gray-200 text-gray-700 border border-gray-300 px-4 py-2 rounded-t-lg">Featured Project</h4>
              <div className="border border-gray-300 rounded-b-lg p-4 text-center text-gray-500 italic">
                No projects available
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Render the Modal When Open */}
      {isModalOpen && <MemberModal member={member} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default MemberCard;
