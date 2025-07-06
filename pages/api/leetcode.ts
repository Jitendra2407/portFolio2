// pages/api/leetcode.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const username = 'Jitendra_Kumar_24';

  const query = `
    query userProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com/',
        'User-Agent': 'Mozilla/5.0', // required to avoid being blocked
      },
      body: JSON.stringify({
        query,
        variables: { username },
        operationName: 'userProfile',
      }),
    });

    if (!response.ok) throw new Error('Failed to fetch data');

    const data = await response.json();
    res.status(200).json(data.data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export default handler;
