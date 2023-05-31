interface ClientConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
}

const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-22",
};

export default clientConfig;
