import { 
  type Testimonial, 
  type InsertTestimonial,
  type ContactSubmission,
  type InsertContact
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getAllTestimonials(): Promise<Testimonial[]>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private testimonials: Map<string, Testimonial>;
  private contacts: Map<string, ContactSubmission>;

  constructor() {
    this.testimonials = new Map();
    this.contacts = new Map();
    
    // Seed with default testimonials for better initial experience
    this.seedDefaultTestimonials();
  }

  private seedDefaultTestimonials() {
    const defaultTestimonials = [
      {
        id: '1',
        name: 'Sarah Ahmed',
        rating: '5',
        comment: 'The best coffee in 10th of Ramadan! The Rose Latte is absolutely divine, and the atmosphere is so cozy and welcoming. Fifth Lane has become my go-to spot for work and relaxation.',
        createdAt: new Date('2024-10-20'),
      },
      {
        id: '2',
        name: 'Mohamed Hassan',
        rating: '5',
        comment: 'Exceptional quality and service. The baristas really know their craft, and you can taste the difference. The Spiced Cardamom Cappuccino is a must-try!',
        createdAt: new Date('2024-10-21'),
      },
      {
        id: '3',
        name: 'Layla Ibrahim',
        rating: '5',
        comment: 'A hidden gem in our neighborhood! The interior is beautiful, the coffee is fantastic, and the pastries are always fresh. Highly recommend the croissants!',
        createdAt: new Date('2024-10-22'),
      },
    ];

    defaultTestimonials.forEach((testimonial) => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
