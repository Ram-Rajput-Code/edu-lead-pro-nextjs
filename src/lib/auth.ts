import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

export function signToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET);
}

export function getAuthUser(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  return verifyToken(token);
}
