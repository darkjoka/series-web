export interface CardProps {
  imageSrc: string;
  permalink: string;
  rating?: string;
  teaser?: string;
  title: string;
}

export interface SearchCardProps {
  title: string;
  permalink: string;
}

export interface DetailProps {
  description: string;
  genres: [string];
  heroImage: string;
  seasonEpisodes: [
    {
      season: string;
      episodes: [
        {
          episodePermalink: string;
          episodeSize: string;
          epidsodeTitle: string; //TODO: change to correct spelling afteer correction on server
        }
      ];
    }
  ];
  title: string;
}
