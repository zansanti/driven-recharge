import * as summaryRepository from '../repositories/summaryRepository';

export async function getSummary(document: string) {
  return await summaryRepository.getSummaryByDocument(document);
}