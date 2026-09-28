export type ThenMeta = {
  title: string;
  // Short name of the 2014 technique, e.g. "Hidden radio inputs + labels"
  technique: string;
  // Paragraphs from the original site, kept as historical notes
  notes: string[];
};

export type NowMeta = {
  // Short name of the native approach, e.g. "<dialog> + invoker commands"
  technique: string;
  // Paragraphs explaining what the platform does natively now
  notes: string[];
  // Web features used, each with its baseline/support status
  features: { name: string; support: string; url: string }[];
};
