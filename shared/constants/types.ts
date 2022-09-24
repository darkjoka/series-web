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

export interface TrailerProps {
  title: string;
  permalink: string;
  thumbnailSrc: string;
  videoSrc: string;
  production: string;
  open: (trailer: string) => void;
}
export interface DetailProps {
  description: string;
  genres: [string];
  heroImage: string;
  seasonEpisodes: SeasonEpisode[]
  title: string;
  prev?: string;
}


export interface SeasonEpisode {
  season: string
  episodes: Episode[]
}

export interface Episode {
  episodePermalink: string;
  episodeSize: string;
  episodeTitle: string
}