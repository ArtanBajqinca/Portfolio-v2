import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Label } from '@/components/Label';
import { LabelIcon } from './LabelIcon';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
const BASE_IMAGE_PATH = '/images/programming-projects/project-card/';

export const ProjectCard = ({
  id,
  title = 'Coinnect Four',
  description = 'A multiplayer Connect Four game with a unique coin theme, developed for my Android course final project.',
  imageFileName = 'Dummy.png',
  labels = [],
  Repo,
  AppStore,
  GooglePlay,
}) => {
  const imageSrc = `${BASE_IMAGE_PATH}${imageFileName}`;

  return (
    <Link href={`/projects/${id}`} passHref>
      <div
        className="flex flex-col lg:flex-row bg-ui-bg w-[300px] lg:w-[600px] max-h-[600px] rounded-[10px] group duration-200 transform transition-transform hover:scale-[102%] cursor-pointer"
      >
        {/* Image */}
        <div className="m-3 rounded-[10px] max-w-[300px]">
          <img
            className="rounded-[10px] border-4 border-ui-elevated w-[800px]"
            src={imageSrc}
            alt={`${title} project screenshot`}
          />
        </div>
        <div className="mx-4 lg:mr-5 lg:my-5 lg:ml-2 flex flex-col justify-between">
          {/* Title and arrow */}
          <div className="flex justify-between">
            <div className="text-ui-ink text-[21px] lg:text-[23px] leading-[28px] font-sfpro-bold w-full">
              {title}
            </div>
            <div className="lg:group-hover:translate-x-[8px] lg:group-hover:-translate-y-2 lg:transition-transform duration-200">
              <MdArrowOutward
                className="text-ui-ink"
                size={20}
                aria-label={`Open project ${title}`}
              />
            </div>
          </div>
          {/* Description */}
          <div className="text-ui-ink-2 text-[14px] mt-1 mb-3 lg:mt-1 lg:text-[15px] font-sfpro-light leading-[18px] lg:mb-4">
            {description}
          </div>
          {/* Labels */}
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4 lg:mb-0">
              {labels.map((label, index) => (
                <Label key={index} text={label} />
              ))}
              {Repo && (
                <LabelIcon
                  label={'Repository'}
                  textColor={'text-ui-ink'}
                  icon={FaGithub}
                  bgColor={'bg-ui-elevated'}
                  fontWeight="font-sfpro-medium"
                />
              )}
              {AppStore && (
                <LabelIcon
                  label={'App Store'}
                  textColor={'text-ui-ink'}
                  bgColor={'bg-ui-elevated'}
                  icon="/images/appstore.svg"
                  fontWeight="font-sfpro-bold"
                />
              )}
              {GooglePlay && (
                <LabelIcon
                  label={'Google Play'}
                  textColor={'text-ui-ink'}
                  bgColor={'bg-ui-elevated'}
                  icon="/images/googleplay.svg"
                  fontWeight="font-sfpro-bold"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
