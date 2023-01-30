import { CHALLENGE_API_KEY, metrics } from "../data/Mocks";
import { Metric } from "../Models/Metric";

export default class BackendService {
	apiKey : string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getMetrics(): Promise<Metric[]> {
        await this.delay(1000);
        if(this.apiKey !== CHALLENGE_API_KEY) { return Promise.reject("API Key is not valid!"); }
        return Promise.resolve(metrics);
    }

    async getMetric(id: string): Promise<Metric | undefined> {
        await this.delay(1000);
        if(this.apiKey !== CHALLENGE_API_KEY) { return Promise.reject("API Key is not valid!"); }
        return Promise.resolve(metrics.find(m => m.id === id));
    }
    
    async addMetric(metric: Metric): Promise<boolean> {
        await this.delay(1000);
        if(this.apiKey !== CHALLENGE_API_KEY) { return Promise.reject("API Key is not valid!"); }
        metrics.push(metric);
        return Promise.resolve(true);
    }

    async updateMetric(metric: Metric): Promise<boolean> {
        await this.delay(1000);
        if(this.apiKey !== CHALLENGE_API_KEY) { return Promise.reject("API Key is not valid!"); }
        const index = metrics.findIndex(m => m.id === metric.id);
        if (index >= 0) {
            metrics[index] = metric;
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    async deleteMetric(id: string): Promise<boolean> {
        await this.delay(1000);
        if(this.apiKey !== CHALLENGE_API_KEY) { return Promise.reject("API Key is not valid!"); }
        const index = metrics.findIndex(m => m.id === id);
        if (index >= 0) {
            metrics.splice(index, 1);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    async delay(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}