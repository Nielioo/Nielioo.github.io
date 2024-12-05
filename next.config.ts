import type { NextConfig } from "next";
import path from 'path';
import nextRemoteRefresh from 'next-remote-refresh';

const withRemoteRefresh = nextRemoteRefresh({
  paths: [path.resolve(__dirname, 'src', 'contents')],
});

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["src"],
  },
};

export default withRemoteRefresh(nextConfig);