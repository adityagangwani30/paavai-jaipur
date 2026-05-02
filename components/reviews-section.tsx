"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Absolutely love the collection at Paavai! Found the most beautiful kurti for my cousin's wedding. The staff was incredibly helpful.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Anjali Gupta",
    rating: 5,
    comment: "Best boutique in Jaipur for traditional wear. The quality of sarees here is unmatched. Will definitely come back!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Meera Patel",
    rating: 4,
    comment: "Great variety of ethnic wear. The artificial jewellery collection is stunning. Prices are very reasonable for the quality.",
    date: "1 month ago",
  },
  {
    id: 4,
    name: "Kavita Singh",
    rating: 5,
    comment: "Paavai never disappoints! I've been shopping here for years. The new kurta collection is simply gorgeous.",
    date: "2 months ago",
  },
]

export function ReviewsSection() {
  const [reviews, setReviews] = useState(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: "Just now",
    }
    setReviews([newReview, ...reviews])
    setFormData({ name: "", rating: 5, comment: "" })
    setShowForm(false)
  }

  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Customer Reviews
            </p>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              What People Say About Us
            </h2>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            {showForm ? "Cancel" : "Leave a Review"}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-12 rounded-2xl bg-background p-6 shadow-sm"
          >
            <h3 className="mb-6 font-serif text-xl font-semibold text-foreground">
              Share Your Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 transition-colors ${
                          star <= formData.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="mb-2 block text-sm font-medium text-foreground">
                  Your Review
                </label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Tell us about your experience..."
                  rows={4}
                  required
                  className="rounded-lg"
                />
              </div>

              <Button
                type="submit"
                className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                Submit Review
              </Button>
            </div>
          </form>
        )}

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-background p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mt-4 text-foreground/80">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
