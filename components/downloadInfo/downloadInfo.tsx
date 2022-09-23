import Link from 'next/link';
import React from 'react';
import {DownloadCloud} from 'react-feather';

import {Episode, SeasonEpisode} from '../../shared/constants/types';
import Accordion from '../accordion';

export default function DownLoadInfo({
  seasonEpisodes,
}: {
  seasonEpisodes: SeasonEpisode[];
}) {
  return (
    <div className="my-4">
      <div className="sm:hidden space-y-2">
        {seasonEpisodes.map(season => (
          <Accordion title={season.season} key={season.season}>
            <Episodes episodes={season.episodes} />
          </Accordion>
        ))}
      </div>
      <div className="hidden sm:flex space-x-2">
        <div className="flex-1 space-y-2">
          {seasonEpisodes.map((season, index) => {
            if (index % 2 === 0)
              return (
                <Accordion title={season.season} key={season.season}>
                  <Episodes episodes={season.episodes} />
                </Accordion>
              );
          })}
        </div>
        <div className="flex-1 space-y-2">
          {seasonEpisodes.map((season, index) => {
            if (index % 2 !== 0)
              return (
                <Accordion title={season.season} key={season.season}>
                  <Episodes episodes={season.episodes} />
                </Accordion>
              );
          })}
        </div>
      </div>
    </div>
  );
}

const Episodes = ({episodes}: {episodes: Episode[]}) => {
  return (
    <>
      {episodes.map(episode => (
        <div
          key={episode.episodePermalink}
          className="p-5 flex items-center justify-between"
        >
          <div>
            <p>{episode.episodeTitle}</p>
            <p className="text-sm text-gray-500">{episode.episodeSize}</p>
          </div>
          <Link href={episode.episodePermalink} passHref>
            <a className="border p-3 rounded hover:bg-gray-100">
              <DownloadCloud />
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};
